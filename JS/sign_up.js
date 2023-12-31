const supabaseclient = supabase.createClient(
	"https://izuagmzuscxemmhlirlk.supabase.co",
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6dWFnbXp1c2N4ZW1taGxpcmxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5MDQ2NjcsImV4cCI6MjAxMjQ4MDY2N30.596CiB1jVlRRLQlu0IvViUpoy26Bli_IhW_3lcd2-1U"
);
const sign_up = document.getElementById("sign-up-page-btn");
const sign_up_passwd = document.getElementById("sign-up-passwd");
const sign_up_admin = document.getElementById("sign-up-admin");
const sign_up_name = document.getElementById("sign-up-name");
const alert = document.getElementById("alert-message");


sign_up.addEventListener("click",async function() {
  const passwd = sign_up_passwd.value.trim();
  const admin = sign_up_admin.value.trim();
  const name = sign_up_name.value.trim();
  if((admin.length == 7 && !isNaN(admin)) && passwd.length && name.length) {
    let { data, error } = await supabaseclient.from("user").insert([
      {
        admin_no: admin,
        name: name,
        password: passwd
      },
    ]);
    if(error){
      alert.textContent = "This Admin Number already has Account (Please enter correct Number or contact person incharge)";
    }
    else{
      window.location.href = "index.html"
    }
  }
  else{
    alert.textContent = "Please fill up all the fields";
  }
}); 