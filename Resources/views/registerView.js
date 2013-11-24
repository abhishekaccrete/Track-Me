/**
 * @author Abhishek
 */

registerView = {};

registerView.open = function(config)
{
	var paramWin = UIParams.paramsForWin(config);
	var winRegister = UIComp.window(paramWin);
	var paramViewRegister = UIParams.paramForParentView(config);
	var viewRegister = UIComp.view(paramViewRegister);
	
	//Email
	var paramTxtFldEmail = UIParams.paramForTxtFld(config);
	paramTxtFldEmail.hintText = "E-mail";
	var txtFldEmail = UIComp.textField(paramTxtFldEmail);
	txtFldEmail.keyboardType = Ti.UI.KEYBOARD_EMAIL;
	
	//User name
	var paramTxtFldUserName = UIParams.paramForTxtFld(config);
	paramTxtFldUserName.hintText = "User Name";
	var txtFldUserName = UIComp.textField(paramTxtFldUserName);

	//Password
	var paramTxtFldPwd = UIParams.paramForTxtFld(config);
	paramTxtFldPwd.hintText = "Password";
	var txtFldPwd = UIComp.textField(paramTxtFldPwd);
	txtFldPwd.passwordMask = true;
	
	//confirm password
	var paramTxtFldConfPwd = UIParams.paramForTxtFld(config);
	paramTxtFldConfPwd.hintText = "Confirm Password";
	var txtFldConfPwd = UIComp.textField(paramTxtFldConfPwd);
	txtFldConfPwd.passwordMask = true;
	
	//first name
	var paramTxtFldFirstName = UIParams.paramForTxtFld(config);
	paramTxtFldFirstName.hintText = "First Name";
	var txtFldFirstName = UIComp.textField(paramTxtFldFirstName);
	
	//last name
	var paramTxtFldLastName = UIParams.paramForTxtFld(config);
	paramTxtFldLastName.hintText = "First Name";
	var txtFldLastName = UIComp.textField(paramTxtFldLastName);

	var paramForBtnCreateUser = UIParams.paramForCreateUserButton(config);
	var btnCreateUser = UIComp.button(paramForBtnCreateUser);
	
	btnCreateUser.addEventListener('click',function(e)
	{
		var userInfo =
		{
			'email': txtFldEmail.value,
			'username': txtFldUserName.value,
			'password': txtFldPwd.value,
			'password_confirmation': txtFldConfPwd.value,
			'first_name': txtFldFirstName.value,
			'last_name': txtFldLastName.value
		};
		try
		{
			model.createUser(config, userInfo);
		}
		catch(e)
		{
			Ti.API.info(e);
		}
	});
	
	viewRegister.add(txtFldEmail);
	viewRegister.add(txtFldUserName);
	viewRegister.add(txtFldPwd);
	viewRegister.add(txtFldConfPwd);
	viewRegister.add(txtFldFirstName);
	viewRegister.add(txtFldLastName);
	viewRegister.add(btnCreateUser);
	winRegister.add(viewRegister);
	winRegister.open();

};
