import React from "react";
//El jumbotron es spam
const PutoJumbotron = () => {
    return (
        <div className="container my-5">
            <div className="position-relative p-5 text-left text-muted bg-body border border-dashed rounded-5">
                <button
                    type="button"
                    className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
                    aria-label="Close">
                    </button>
                <svg className="bi mt-5 mb-3" width="48" height="48" aria-hidden="true">
                    <use xlinkHref="#check2-circle"></use>
                </svg>
                <h1 className="text-body-emphasis">A Warm Welcome!</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores eos possimus nisi obcaecati harum aliquid dolorem sint neque ducimus nam architecto quo aperiam porro reprehenderit, vero expedita temporibus est accusamus!
                </p>
                <button className="btn btn-primary px-5 mb-5" type="button">
                    Call to action
                </button>
            </div>
        </div>
    )
}

export default PutoJumbotron;