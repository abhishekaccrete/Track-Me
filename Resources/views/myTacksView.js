/**
 * @author Abhishek
 */
myTracksView = {};

myTracksView.getMyTracksView = function(config)
{
	var paramParentView = UIParams.paramForParentView(config);
	var parentView = UIComp.view(paramParentView);
	return parentView;
};

