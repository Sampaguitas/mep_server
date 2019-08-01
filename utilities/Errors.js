
const Errors = {
    //00**: "General Errors",
    "0000": "Unauthorized",
    "0001": "Something went wrong",
    //01**: "Article Errors",
    "0100": "Article already exists",
    "0101": "Article does not exist",
    "0102": "Article has been updated",
    "0103": "Article has been deleted",
    "0104": "No Article match",
    //02**: "ColliPack Errors",
    "0200": "ColliPack already exists",
    "0201": "ColliPack does not exist",
    "0202": "ColliPack has been updated",
    "0203": "ColliPack has been deleted",
    "0204": "No ColliPack match",
    //03**: "ColliType Errors",
    "0300": "ColliType already exists",
    "0301": "ColliType does not exist",
    "0302": "ColliType has been updated",
    "0303": "ColliType has been deleted",
    "0304": "No ColliType match",
    //04**: "DocDefinition Errors",
    "0400": "DocDefinition already exists",
    "0401": "DocDefinition does not exist",
    "0402": "DocDefinition has been updated",
    "0403": "DocDefinition has been deleted",
    "0404": "No DocDefinition match",
    //05**: "DocFlow Errors",
    "0500": "DocFlow already exists",
    "0501": "DocFlow does not exist",
    "0502": "DocFlow has been updated",
    "0503": "DocFlow has been deleted",
    "0504": "No DocFlow match",
    //06**: "Erp Errors",
    "0600": "Erp already exists",
    "0601": "Erp does not exist",
    "0602": "Erp has been updated",
    "0603": "Erp has been deleted",
    "0604": "No Erp match",
    //07**: "Field Errors",
    "0700": "Field already exists",
    "0701": "Field does not exist",
    "0702": "Field has been updated",
    "0703": "Field has been deleted",
    "0704": "No Field match",
    //08**: "FieldName Errors",
    "0800": "FieldName already exists",
    "0801": "FieldName does not exist",
    "0802": "FieldName has been updated",
    "0803": "FieldName has been deleted",
    "0804": "No FieldName match",
    //09**: "Locale Errors",
    "0900": "Locale already exists",
    "0901": "Locale does not exist",
    "0902": "Locale has been updated",
    "0903": "Locale has been deleted",
    "0904": "No Locale match",
    //10**: "Opco Errors",
    "1000": "Opco already exists",
    "1001": "Opco does not exist",
    "1002": "Opco has been updated",
    "1003": "Opco has been deleted",
    "1004": "No Opco match",
    //11**: "PackItem Errors",
    "1100": "PackItem already exists",
    "1101": "PackItem does not exist",
    "1102": "PackItem has been updated",
    "1103": "PackItem has been deleted",
    "1104": "No PackItem match",
    //12**: "Po Errors",
    "1200": "Po already exists",
    "1201": "Po does not exist",
    "1202": "Po has been updated",
    "1203": "Po has been deleted",
    "1204": "No Po match",
    //13**: "Project Errors",
    "1300": "Project already exists",
    "1301": "Project does not exist",
    "1302": "Project has been updated",
    "1303": "Project has been deleted",
    "1304": "No Project match",
    //14**: "Sub Errors",
    "1400": "Sub already exists",
    "1401": "Sub does not exist",
    "1402": "Sub has been updated",
    "1403": "Sub has been deleted",
    "1404": "No Sub match",
    //15**: "Supplier Errors",
    "1500": "Supplier already exists",
    "1501": "Supplier does not exist",
    "1502": "Supplier has been updated",
    "1503": "Supplier has been deleted",
    "1504": "No Supplier match",
    //16**: "User Errors",
    "1600": "User already exists",
    "1601": "User does not exist",
    "1602": "User has been updated",
    "1603": "User has been deleted",    
    "1604": "No user match",
    "1605": "Password does not match",    
    "1606": "Error generating hashed token",
    "1607": "Password has been updated",
    "1608": "Check your email to reset your password",
    "1609": "Unable to send the email verification",
    "1610": "Invalid or expired token",
    //17**: "UserSetting Errors",
    "1700": "UserSetting already exists",
    "1701": "UserSetting does not exist",
    "1702": "UserSetting has been updated",
    "1703": "UserSetting has been deleted",
    "1704": "No UserSetting match",
    //18**: "Counter Errors",
    "1800": "Counter already exists",
    "1801": "Counter does not exist",
    "1802": "Counter has been updated",
    "1803": "Counter has been deleted",
    "1804": "No Counter match",
    //19**: "Certificate Errors",
    "1900": "Certificate already exists",
    "1901": "Certificate does not exist",
    "1902": "Certificate has been updated",
    "1903": "Certificate has been deleted",
    "1904": "No Certificate match",
    //20**: "Screen Errors",
    "2000": "Screen already exists",
    "2001": "Screen does not exist",
    "2002": "Screen has been updated",
    "2003": "Screen has been deleted",
    "2004": "No Screen match",
    //21**: "Access Errors",
    "2100": "Access already exists",
    "2101": "Access does not exist",
    "2102": "Access has been updated",
    "2103": "Access has been deleted",
    "2104": "No Access match",
    //22**: "Curreny Errors",
    "2200": "Curreny already exists",
    "2201": "Curreny does not exist",
    "2202": "Curreny has been updated",
    "2203": "Curreny has been deleted",
    "2204": "No Curreny match",
    //23**: "Region Errors",
    "2300": "Region already exists",
    "2301": "Region does not exist",
    "2302": "Region has been updated",
    "2303": "Region has been deleted",
    "2304": "No Region match",
    //24**: "Template Errors",
    "2400": "No Project selected",
    "2401": "No file selected",
    "2402": "Template has been uploaded",
    "2403": "Template has been deleted",
    "2404": "Project folder has been deleted",
    "2405": "An error occurred",
    "2406": "The Project folder is already empty",
    "2407": "Templates have been copied to the new Project",
    //25**: "DocType Errors",
    "2500": "DocType already exists",
    "2501": "DocType does not exist",
    "2502": "DocType has been updated",
    "2503": "DocType has been deleted",
    "2504": "No DocType match",
    //26**: "DocField Errors",
    "2600": "DocField already exists",
    "2601": "DocField does not exist",
    "2602": "DocField has been updated",
    "2603": "DocField has been deleted",
    "2604": "No DocField match",
}

module.exports = function generateError(ErrCode) {
    return new Error(Errors[ErrCode]);
}