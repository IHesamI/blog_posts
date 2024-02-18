import React from "react";

export default function Footer() {
  return (
    <>
      <div className="w-[100%] flex flex-row text-textcolor mt-10">
        <div className="flex flex-col w-[60%] gap-3 pl-4">
          <a href="#">
            <img src="https://picsum.photos/id/453/50/50" alt="logo" />
          </a>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            Error iusto id, inventore odit commodi incidunt
            <br />
            ratione natus vel libero quia
          </p>
          <div>
            <div className="iconlink">
              <a href="">
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios/50/x.png"
                  alt="x"
                />
              </a>
            </div>
          </div>
        </div>
        <table className="table-fixed  w-[60%]">
          <thead>
            <tr>
              <th>Features</th>
              <th>Pages</th>
              <th>About</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Style Guide</td>
              <td>Tags</td>
              <td>Authors</td>
            </tr>
            <tr>
              <td>Style Guide</td>
              <td>Tags</td>
              <td>Authors</td>
            </tr>
            <tr>
              <td>Tags</td>
              <td>Sign In</td>
              <td>Terms</td>
            </tr>
            <tr>
              <td>Authors</td>
              <td>Sign Up</td>
              <td>Contact</td>
            </tr>
            <tr>
              <td>Features</td>
              <td>Account Free</td>
              <td>404 error</td>
            </tr>
            <tr>
              <td>Contact</td>
              <td>Account paid</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=" w-[100%] h-[30px]"></div>
    </>
  );
}
