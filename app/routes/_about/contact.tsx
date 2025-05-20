import { Link } from "@remix-run/react";

function Contact() {
  return (
    <div id="contact">
      <div className="flex gap-3 items-center justify-center flex-wrap">
        <img src="./public/images/profile.jpg" alt="profile" className="w-[200px] aspect-square rounded-full" />
        <div className="flex-1">
          <h3>Contact.</h3>
          <p>Name. <strong>이초이</strong></p>
          <p>Email. <strong>cho.i.lee.1223@gmail.com</strong></p>

          <h3 className="mt-5">Channel.</h3>
          <p>GitHub. <Link to="https://github.com/Cho-i" target="_blank" rel="noreferrer" className="font-bold">https://github.com/Cho-i</Link></p>
          <p>Velog. <Link to="https://velog.io/@chooomu" target="_blank" rel="noreferrer" className="font-bold">https://velog.io/@chooomu</Link></p>
        </div>
      </div>

    </div>
  );
}

export default Contact;