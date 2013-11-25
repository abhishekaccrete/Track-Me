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

UIParams.paramForTxtFld = function(config)
{
	return {
		left: '10%',
		top: 5,
		width: '80%',
		height: Ti.UI.SIZE,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		borderRadius: '5px',
		borderWidth: '2px',
		backgroundColor: 'white'
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
