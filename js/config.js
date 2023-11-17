const BASE_URL = "http://ec2-13-125-87-160.ap-northeast-2.compute.amazonaws.com:3000";

async function getUserNo(){
    const response = await axios.get(`${BASE_URL}/auth/userinfo`, { withCredentials: true})
    const userNo = parseInt(response.data.user_no);
    return userNo
}
