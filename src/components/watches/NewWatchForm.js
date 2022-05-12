import { useRef } from 'react';

import classes from './NewWatchForm.module.css'
import Card from "../ui/Card";

function NewWatchForm () {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const priceInputRef = useRef();
    const descInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;
        const enteredDesc = descInputRef.current.value;

        const watchData = {
            title: enteredTitle,
            image: enteredImage,
            price: enteredPrice,
            desc: enteredDesc
        };

        console.log(watchData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Watch Title</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Watch Image</label>
                    <input type="url" required id="image" ref={imageInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="price">Watch Cost</label>
                    <input type="text" required id="price" ref={priceInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="desc">Description</label>
                    <textarea id='desc' required rows='5' ref={descInputRef}></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Add Watch</button>
                </div>
            </form>
        </Card>
    );
}

export default NewWatchForm;