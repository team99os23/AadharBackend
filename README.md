# AadharBackend

For **POST** /aadhaar/create
```python
{
  "AadhaarNumber":"1234567890211213",
  "VID":"dvigdqfefggafdd",
  "Name":"neadaqfasggdgdddaoje",
  "Address":"Aqdrdsddgdahdhfdgress",
  "IrisScanCode":"IqscgfaddhgdfgisScanCode",
  "FingerPrintCode":"qsgdPCfhoafafsdfgerPade",
  "PhoneNumber":"9330341418"
}
```

For POST /aadhaar/details
```python
{
    "AadhaarNumber":"1234567890211213"
}
```


For POST /aadhaar/authenticate
```python
{
  "IrisScanCode":"IqscgfaddhgdfgisScanCode",
  "FingerPrintCode":"qsgdPCfhoafafsdfgerPade"
}
```