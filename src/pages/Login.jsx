import React from 'react'

function Login() {
    const new_login = () => {

    }
    return (
        <section className="hero is-fullheight is-info">
            <div className="hero-body">
                <div className='container'>
                    <div className='columns is-centered'>
                        <div className='column is-5-tablet is-4-desktop is-3-widescreen'>
                            <form action={new_login} className="box has-text-centered">
                                <h1 className="title is-4 has-text-primary">BlackCigatoka</h1>
                                <div className="field">
                                    <div class="control has-icons-left">
                                        <input type="email" className="input is-primary is-rounded" placeholder="Email" required />
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-envelope"></i>

                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    {/* <label className="label">Password</label> */}
                                    <div className="control has-icons-left">
                                        <input type="password" className="input is-primary is-rounded" placeholder="Password" />
                                        <span class="icon is-small is-left">
                                            <i class="fas fa-lock" />
                                        </span>
                                    </div>
                                </div>
                                <button className="button is-fullwidth is-primary is-rounded">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
