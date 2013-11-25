/**
 * @author Abhishek
 */
UIParams = {};

UIParams.paramsForTabTrack = function(config)
{
	return {
		title: 'Track'
	};
};

UIParams.paramsForTabUsers = function(config)
{
	return {
		title: 'Users'
	};
};

UIParams.paramsForWin = function(config)
{
	return {
		backgroundColor: 'white',
		exitOnClose: false,
		fullscreen: false,
		height: Ti.UI.FILL
	};
};

UIParams.paramForParentView = function(config)
{
	return {
		left: 0,
		top: 0,
		width: Ti.UI.FILL,
		height: Ti.UI.FILL,
		backgroundColor: 'gray',
		layout: 'vertical'
	};
};

UIParams.paramForTxtFldEmail = function(config)
{
	return {
		left: '10%',
		top: 20,
		width: '80%',
		height: Ti.UI.SIZE,
		hintText: 'Email',
		keyboardType: Ti.UI.KEYBOARD_EMAIL ,
		borderRadius: '2px',
		borderWidth: '2px',
		borderColor: 'black',
		backgroundColor: 'white',
		color: 'black'
	};
};

UIParams.paramForTxtFldFirstName = function(config)
{
	return {
		left: '10%',
		top: 20,
		width: '80%',
		height: Ti.UI.SIZE,
		hintText: 'First Name',
		borderRadius: '2px',
		borderWidth: '2px',
		borderColor: 'black',
		backgroundColor: 'white',
		color: 'black'
	};
};

UIParams.paramForTxtFldLastName = function(config)
{
	return {
		left: '10%',
		top: 20,
		width: '80%',
		height: Ti.UI.SIZE,
		hintText: 'Last Name',
		borderRadius: '2px',
		borderWidth: '2px',
		borderColor: 'black',
		backgroundColor: 'white',
		color: 'black'
	};
};

UIParams.paramForTxtFldUserName = function(config)
{
	return {
		left: '10%',
		top: 20,
		width: '80%',
		height: Ti.UI.SIZE,
		hintText: 'User name',
		borderRadius: '2px',
		borderWidth: '2px',
		borderColor: 'black',
		backgroundColor: 'white',
		color: 'black'	
	};
};

UIParams.paramForTxtFldPassword = function(config)
{
	return {
		left: '10%',
		top: 20,
		width: '80%',
		height: Ti.UI.SIZE,
		hintText: 'Password',
		passwordMask: true,
		borderRadius: '2px',
		borderWidth: '2px',
		borderColor: 'black',
		backgroundColor: 'white',
		color: 'black'
	};
};

UIParams.paramForTxtFldConfirmPassword = function(config)
{
	return {
		left: '10%',
		top: 20,
		width: '80%',
		height: Ti.UI.SIZE,
		hintText: 'Confirm Password',
		passwordMask: true,
		borderRadius: '2px',
		borderWidth: '2px',
		borderColor: 'black',
		backgroundColor: 'white',
		color: 'black'
	};
};


UIParams.paramForCreateUserButton = function(config)
{
	return {
		left: '10%',
		top: 5,
		width: '80%',
		height: Ti.UI.SIZE,
		title: 'Create User'
	};
};

UIParams.paramForButton = function(config)
{
	return {
		left: '10%',
		top: 5,
		width: '80%',
		height: Ti.UI.SIZE
	};
};

UIParams.paramForLabel = function(config)
{
	return {
		left: 10,
		top: 5, 
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE
	};
};
