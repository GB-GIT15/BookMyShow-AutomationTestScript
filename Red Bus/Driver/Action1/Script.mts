'On Error Resume Next
Dim path
path="C:\Users\user244\Documents\Red Bus\Test Data\Test Data.xlsx"
DataTable.AddSheet "Test Data"
DataTable.ImportSheet path,"BMS","Test Data"

rowCount = DataTable.GetSheet("Test Data").GetRowCount

For rows = 1 To rowCount

DataTable.SetCurrentRow rows

If DataTable.Value("Execution_Flag","Test Data")="Y" Then
executeTest (DataTable.Value("TestCaseID","Test Data"))
DataTable.Value("Result","Test Data")=Environment.Value("Result")
End If

Next

DataTable.ExportSheet path,"Test Data","BMS"




'---------------------------------------------------------"DESCRIPTIVE OBJECT"-------------------------------------------------------------------------------------------------------------------------
'------------------------------------------------------------Profile_Edit--------------------------------------------------------------------------------------------------------------------------------------- @@ script infofile_;_ZIP::ssf97.xml_;_
'EditEmailResendOTPValidationD()
'EditMobileNoResendOTPValidationD()
'First_Name_InvalidD()
'Last_Name_InvalidD()
'Pincode_Special_CharacterD()

'--------------------------------------SELECT_City----------------------------------------------------------------------------------------------------------------------------------------------------
' BengaluruD()
'HyderabadD()
'PuneD()
'ChennaiD()
'MumbaiD()
 @@ script infofile_;_ZIP::ssf122.xml_;_
'---------------------------------------------------------"DESCRIPTIVE PROGRAM"-------------------------------------------------------------------------------------------------------------------------
'---------------------------------------------------------Profile_Edit--------------------------------------------------------------------------------------------------------------------------------------- @@ script infofile_;_ZIP::ssf97.xml_;_
'EditEmailResendOTPValidation()
'EditMobileNoResendOTPValidation()
'First_Name_Invalid()
'Last_Name_Invalid()
'Pincode_Special_Character()

'--------------------------------------SELECT_City----------------------------------------------------------------------------------------------------------------------------------------------------
' Bengaluru()
'Hyderabad()
'Pune()
'Chennai()
'Mumbai() @@ script infofile_;_ZIP::ssf123.xml_;_
 
 

'-----------------------------------------Invalid-----------------------------------------------------------------------------
'Edit_Email()    
' Edit_MobileNo ()
'First_Name_Invalid()
'First_Name_Valid()
'Last_Name_InValid()
'Birthday()
'Fname_Special_Character()
'Fname_Alpha_Numeric()
'Fname_With_Space()
'Lname_Special_Character()
' Lname_Alpha_Numeric()
'Lname_With_Space()
' Pincode_Invalid()
'Pincode_Special_Character()
 @@ script infofile_;_ZIP::ssf143.xml_;_
