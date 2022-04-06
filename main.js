function slack() {
  // フォームの入力内容
  const name = document.getElementById("InputName").value;
  const email = document.getElementById("InputEmail").value;
  const content = document.getElementById("InputContent").value;
  // メールアドレスの形式
  const emailCheck =
    /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;

  // Slack連携用URL
  const url =
    "https://hooks.slack.com/services/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";
  // フォームの入力内容をセット
  const data = {
    text:
      "お問合せがありました\n" +
      "お名前:" +
      name +
      "\n" +
      "Email:" +
      email +
      "\n" +
      "内容:" +
      content,
  };

  // フォームの入力内容をバリデーションチェック
  if (name == "") {
    alert("名前は必須です。");
  } else if (email == "") {
    alert("メールアドレスは必須です。");
  } else if (!emailCheck.test(email)) {
    alert("メールアドレスの形式で入力してください。");
  } else if (content == "") {
    alert("お問い合わせ内容は必須です。");
  } else {
    //　入力内容を送信
    alert("送信が完了しました。");
    $.ajax({
      type: "POST",
      url: url,
      data: `payload=${JSON.stringify(data)}`,
    });
    // 送信後にフォームリセット
    document.contactForm.reset();
  }
}
