const { getAccessToken, getFriendActivity } = require(".");
require("dotenv").config();

const main = async () => {
	const accessToken = await getAccessToken(process.env.SP_DC);
	const friendActivity = await getFriendActivity(accessToken);
	const friends = friendActivity;
	friendActivity.forEach((friend) => {
		console.log(friend["user"]["name"] + " - " + friend["track"]["name"]);
	});
};

main();
