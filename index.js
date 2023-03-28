const axios = require("axios");

exports.getAccessToken = async function getAccessToken(sp_dc) {
	const endpoint = "https://open.spotify.com/get_access_token?reason=transport&productType=web_player";
	const config = {
		headers: {
			cookie: `sp_dc=${sp_dc}`,
		},
	};
	const res = await axios.get(endpoint, config);
	return res["data"]["accessToken"];
};

exports.getFriendActivity = async function getFriendActivity(accessToken) {
	const endpoint = "https://guc-spclient.spotify.com/presence-view/v1/buddylist";
	const config = {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	};
	const res = await axios.get(endpoint, config);
	return res["data"]["friends"].reverse();
};
