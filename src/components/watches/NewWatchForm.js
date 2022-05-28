import { useState } from 'react';

import classes from './NewWatchForm.module.css'
import Card from "../ui/Card";

function NewWatchForm (props) {
    const [currentTitle, setCurrentTitle] = useState('');
    const [currentImage, setCurrentImage] = useState('');
    const [currentPrice, setCurrentPrice] = useState('');
    const [currentDesc, setCurrentDesc] = useState('');

    function titleChangeHandler(event) {
        setCurrentTitle(event.target.value);
    };

    function imageChangeHandler(event) {
        setCurrentImage(event.target.value);
    };

    function priceChangeHandler(event) {
        setCurrentPrice(event.target.value);
    };

    function descChangeHandler(event) {
        setCurrentDesc(event.target.value);
    };

    function submitHandler(event) {
        event.preventDefault();

        const watchData = {
            title: currentTitle,
            image: currentImage,
            price: currentPrice,
            desc: currentDesc
        };

        props.onAddWatch(watchData);

        setCurrentTitle('');
        setCurrentImage('');
        setCurrentPrice('');
        setCurrentDesc('');
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Watch Title</label>
                    <input
                        type="text"
                        required id="title"
                        onChange={titleChangeHandler}
                        value={currentTitle}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="image">Watch Image</label>
                    <input
                        type="url"
                        required id="image"
                        onChange={imageChangeHandler}
                        value={currentImage}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="price">Watch Cost</label>
                    <input
                        type="text"
                        required id="price"
                        onChange={priceChangeHandler}
                        value={currentPrice}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="desc">Description</label>
                    <textarea
                        id='desc'
                        required rows='5'
                        onChange={descChangeHandler}
                        value={currentDesc}
                    />
                </div>
                <div className={classes.actions}>
                    <button>Add Watch</button>
                </div>
            </form>
        </Card>
    );
}

export default NewWatchForm;