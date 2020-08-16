function loadModelFromDrive() {
  const f = DriveApp.getFileById("1iO0Lz3022AHgTOR4Xd_WLuR1FVXNUIdU")
  const modeljson = f.getAs("application/json").getDataAsString();
  
  const f2 = DriveApp.getFileById("1bDZaBUjweWy-KwGpQP68eoJLMulUfXYZ")
  const weights = f2.getBlob().getBytes()
  
  return [modeljson, weights]
}

function doGet() {
  return HtmlService.createHtmlOutputFromFile("index")
}
