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
		backgroundColor: 'white'	
	};
};

UIParams.paramForParentView = function(config)
{
	return {
		left: 0,
		top: 0,
		width: Ti.UI.FILL,
		height: Ti.UI.FILL,
		backgroundColor: 'white',
		layout: 'vertical'
	};
};

UIParams.paramForTxtFld = function(config)
{
	return {
		left: '10%',
		top: 5,
		width: '80%',
		height: Ti.UI.SIZE,
		borderRadius: '5px',
		borderColor: 'black'
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
