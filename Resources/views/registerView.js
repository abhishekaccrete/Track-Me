/**
 * @author Abhishek
 */

registerView = {};

registerView.open = function(config)
{
	var paramWin = UIParams.paramsForWin(config);
	var winRegister = UIComp.window(paramWin);
	
	winRegister.addEventListener('open',function(e)
    {
    	if(config.osname == 'android' && Ti.Platform.Android.API_LEVEL >10)
    	{
    		winRegister.getActivity().actionBar['displayHomeAsUp'] = true;
    		winRegister.getActivity().actionBar.onHomeIconItemSelected = function(e)
    		{
    			winRegister.close();
    		};
    	}
    });
    
	winRegister.title = 'Register New User';
	var paramViewRegister = UIParams.paramForParentView(config);
	var viewRegister = UIComp.view(paramViewRegister);
	
	//Email
	var paramTxtFldEmail = UIParams.paramForTxtFldEmail(config);
	var txtFldEmail = UIComp.textField(paramTxtFldEmail);
	
	//User name
	var paramTxtFldUserName = UIParams.paramForTxtFldUserName(config);
	var txtFldUserName = UIComp.textField(paramTxtFldUserName);

	//Password
	var paramTxtFldPwd = UIParams.paramForTxtFldPassword(config);
	var txtFldPwd = UIComp.textField(paramTxtFldPwd);
	
	
	//confirm password
	var paramTxtFldConfPwd = UIParams.paramForTxtFldConfirmPassword(config);
	var txtFldConfPwd = UIComp.textField(paramTxtFldConfPwd);
	
	
	//first name
	var paramTxtFldFirstName = UIParams.paramForTxtFldFirstName(config);
	var txtFldFirstName = UIComp.textField(paramTxtFldFirstName);
	
	//last name
	var paramTxtFldLastName = UIParams.paramForTxtFldLastName(config);
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
			model.createUser(config, userInfo, function(e)
			{
				if (e.success) 
				{
					if(dblayer.loginUser(config, e.users[0]))
						winRegister.close();
					var user = e.users[0];
					alert('Success:\n' +'id: ' + user.id + '\n' +'sessionId: ' + config.cloud.sessionId + '\n' +
					'first name: ' + user.first_name + '\n' +'last name: ' + user.last_name);
				} 
				else 
					alert('Error:\n' +((e.error && e.message) || JSON.stringify(e)));
			});
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
	return winRegister;

};
