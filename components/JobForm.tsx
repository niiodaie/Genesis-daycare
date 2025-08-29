"use client";
import { useState } from "react";

export default function JobForm() {
  const [state, setState] = useState<{loading:boolean; ok?:boolean; err?:string}>({loading:false});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState({loading:true});
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const res = await fetch("/api/apply", { method: "POST", body: JSON.stringify(data) });
    const json = await res.json();
    setState({loading:false, ok: json.ok, err: json.ok ? "" : (json.error || "Failed")});
    if (json.ok) form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="card grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input required name="name" placeholder="Full name" className="rounded-xl border px-4 py-3" />
        <input required type="email" name="email" placeholder="Email" className="rounded-xl border px-4 py-3" />
      </div>
      <input required name="phone" placeholder="Phone" className="rounded-xl border px-4 py-3" />
      <input name="position" placeholder="Position Interested (Teacher, Assistant, Cook...)" className="rounded-xl border px-4 py-3" />
      <textarea required name="message" rows={5} placeholder="Tell us about your experience" className="rounded-xl border px-4 py-3" />
      <button className="btn btn-primary" disabled={state.loading}>{state.loading ? "Submitting..." : "Submit Application"}</button>
      {state.ok && <p className="text-green-600">Application received. Thank you!</p>}
      {state.err && <p className="text-red-600">{state.err}</p>}
    </form>
  );
}
