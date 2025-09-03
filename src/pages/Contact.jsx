import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contact(){
  const formRef = useRef(null);
  const [status, setStatus] = useState({state: "idle", message: ""});

  const onSubmit = async (e) => {
    e.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // fallback: open mailto draft with form data
      const data = new FormData(formRef.current);
      const params = new URLSearchParams();
      for (const [k,v] of data.entries()) params.append(k, v);
      const subject = encodeURIComponent("New Insurance Enquiry");
      window.location.href = `mailto:support@trustedcover.in?subject=${subject}&body=${encodeURIComponent(params.toString())}`;
      return;
    }

    try{
      setStatus({state:"loading", message:"Sending..."});
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus({state:"success", message:"Thanks! We’ll get back to you shortly."});
      formRef.current.reset();
    }catch(err){
      console.error(err);
      setStatus({state:"error", message:"Something went wrong. Please try again or use the email link."});
    }
  };

  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Contact Us</h2>
          <p className="text-slate-600 mt-2">Fill the form and our agent will reach out. You can also email <a className="text-brand-700 underline" href="mailto:support@trustedcover.in">support@trustedcover.in</a> or call +91 98765 43210.</p>
          <form ref={formRef} onSubmit={onSubmit} className="card p-6 mt-6 space-y-4">
            <div>
              <label className="label">Name</label>
              <input name="name" required className="input" placeholder="Your full name"/>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="label">Email</label>
                <input type="email" name="email" required className="input" placeholder="you@example.com"/>
              </div>
              <div>
                <label className="label">Phone</label>
                <input type="tel" name="phone" required className="input" placeholder="+91 XXXXX XXXXX"/>
              </div>
            </div>
            <div>
              <label className="label">Insurance Type</label>
              <select name="insuranceType" className="input">
                <option>Life</option>
                <option>Health</option>
                <option>Vehicle</option>
                <option>Travel</option>
                <option>Property</option>
                <option>Business</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="label">Message</label>
              <textarea name="message" rows="4" className="input" placeholder="Tell us about your requirement"></textarea>
            </div>
            <button disabled={status.state==="loading"} className="btn btn-primary w-full">{status.state==="loading" ? "Sending..." : "Send Message"}</button>
            {status.message && <p className={`text-sm ${status.state==="success"?"text-green-600":"text-red-600"}`}>{status.message}</p>}
          </form>
          <div className="card p-6 mt-6">
            <h3 className="text-lg font-semibold">Office</h3>
            <p className="text-slate-600 text-sm mt-2">
              123 Corporate Park, Baner, Pune, Maharashtra 411045<br/>
              Phone: +91 98765 43210
            </p>
          </div>
        </div>
        <div className="card p-6">
          <iframe
            title="Map"
            className="w-full h-80 rounded-xl"
            src="https://www.openstreetmap.org/export/embed.html?bbox=73.758%2C18.548%2C73.82%2C18.575&layer=mapnik"
          />
          <p className="text-xs text-slate-500 mt-2">Approximate service location — pan‑India support available.</p>
        </div>
      </div>
    </section>
  )
}
