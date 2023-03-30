const Aadhaar = require('../models/Aadhaar');

const create_aadhaar = async (req, res) => {
    Aadhaar.find({AadhaarNumber:req.body.AadhaarNumber})
    .then(result1 => {
        if(result1.length!=0){
            res.send("Please Try Again with a unique Aadhaar Number");
        }
        else if(result1.length==0){
            const UserAadhaar = new Aadhaar({
                AadhaarNumber : req.body.AadhaarNumber,
                VID : req.body.VID,
                Name: req.body.Name,
                Address : req.body.Address,
                IrisScanCode : Buffer.from(req.body.IrisScanCode).toString('base64'),
                FingerPrintCode: Buffer.from(req.body.FingerPrintCode).toString('base64'),
                PhoneNumber: req.body.PhoneNumber 
            })
        
            UserAadhaar.save()
            .then((result3)=>{
                res.send('New User Created');
                console.log(result3)
            })
            .catch((err)=>{
                console.log(err);
                res.status(500).json({ message: err.message });
            })
        }
    })
}

const get_details = async (req, res) => {
    console.log(req.body.AadhaarNumber);
    Aadhaar.find({AadhaarNumber: req.body.AadhaarNumber})
    .then((results)=>{
        console.log(results);
        if (results && results.length) {
            results.map((result) => {
                const resultdecode = {
                    AadhaarNumber: req.body.AadhaarNumber,
                    VID : result.VID,
                    Name: result.Name,
                    Address : result.Address,
                    IrisScanCode : Buffer.from(result.IrisScanCode, 'base64').toString('ascii'),
                    FingerPrintCode: Buffer.from(result.FingerPrintCode, 'base64').toString('ascii'),
                    PhoneNumber: result.PhoneNumber 
                }
                res.send(resultdecode);
            })
        }
        else {
            throw Error("Could not find user!");
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: err.message });
    }) 
}


const authenticate_aadhaar = async (req, res) => {
    let found = false;
    Aadhaar.find()
    .then((results)=>{
        results.map(result =>{
            if(Buffer.from(result.IrisScanCode, 'base64').toString('ascii') == req.body.IrisScanCode && Buffer.from(result.FingerPrintCode, 'base64').toString('ascii') == req.body.FingerPrintCode){
                res.send(result);
                found = true;
            }
        })
        if(found == false){
            console.log("No such error available!");
            throw Error("No such user available");
        }
    })
    .catch((err)=>{
        console.log(err);
        res.status(500).json({ message: err.message });
    })
}

module.exports = {
    create_aadhaar,
    get_details,
    authenticate_aadhaar
}