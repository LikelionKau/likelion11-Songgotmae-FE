function changePassword() {
    const newPasswordInput = document.getElementById("newPassword");
    const newPassword = newPasswordInput.value;

    // 입력된 비밀번호가 비어있는지 확인
    if (!newPassword) {
        alert("새로운 비밀번호를 입력하세요.");
        return;
    }

    axios({
        method: "PUT",
        url: `http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080/api/v1/members/{email}/password`,
        data: {
            newPassword: newPassword
        }
    })
        .then(response => {
            // 비밀번호 변경이 성공한 경우
            console.log("비밀번호가 성공적으로 변경되었습니다.", response.data);
        })
        .catch(error => {
            // 비밀번호 변경이 실패한 경우
            console.error("비밀번호 변경에 실패했습니다.", error);
        });
}
