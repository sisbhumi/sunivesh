import "./Styles/OpenAccount.css"
function OpenAccount() {
  return (
    <div className="open-account">
    <section className="p-6">
      <div className="border p-4 shadow-md">
        <h2 className="text-lg font-bold">Open Your D-mat Account</h2>
        <p>Enter your contact number to proceed:</p>
        <input type="text" placeholder="Contact No" className="border p-2 mt-2" />
        <button className="ml-2">Submit</button>
      </div>
    </section>
    </div>
  );
}

export default OpenAccount;
