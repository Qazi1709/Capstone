import React from 'react'

function SignUp() {
  return (
    
    <>
    
	<div className="flex items-center justify-center h-screen">
    <form className="mx-auto flex w-full max-w-lg flex-col rounded-xl border border-border bg-backgroundSecondary p-4 sm:p-20">
	<div className="form-group">
    <div className="form-field">
			<label className="form-label">Enter Full Name</label>
			<input placeholder="Type here" type="text" className="input max-w-full" />
		</div>
		<div className="form-field">
			<label className="form-label">Email address</label>
			<input placeholder="Type here" type="email" className="input max-w-full" />
		</div>
        <div className="form-field">
			<label className="form-label">Mobile Number</label>
			<input placeholder="Type here" type="text" className="input max-w-full" />
		</div>
		<div className="form-field">
			<label className="form-label">Password</label>
			<input placeholder="Type here" type="password" className="input max-w-full" />
		</div>
        <div className="form-field">
			<label className="form-label">Confirm Password</label>
			<input placeholder="Type here" type="password" className="input max-w-full" />
		</div>
        <div className="form-field pt-5">
			<div className="form-control justify-between">
				<button type="button" className="btn btn-primary w-full">Register</button>
			</div>
		</div>
		<div className="form-field">
			<div className="form-control">
				<a className="link link-underline-hover link-primary text-sm">Already a Member? Login</a>
			</div>
		</div>
        
	</div>
    
    
</form>
</div>
    </>
  )
}

export default SignUp