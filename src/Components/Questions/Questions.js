import React from 'react';

const Questions = () => {
    return (
        <div className='w-3/5 mx-auto py-10 my-10'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does React work?
                </div>
                <div className="collapse-content"> 
                    <p>React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
                     Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it is worth keeping a DOM tree in it to speed up its manipulation.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                 Difference between props and state in react:
                </div>
                <div className="collapse-content"> 
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Uses of useEffect:
                </div>
                <div className="collapse-content"> 
                <ul>
                    <li>Running once on mount: fetch API data.</li>
                    <li>Running on props change: update paragraph list on fetched API data update.</li>
                    <li>Running on state change: validating input field.</li>
                    <li>Running on state change: live filtering.</li>
                    <li>Running on state change: trigger animation on new array value.</li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Questions;