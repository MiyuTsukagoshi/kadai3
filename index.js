const WAIT_TIME =2;

const createImage = (imagePath) => {
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.src = imagePath;

        img.onload = () => {
            img.className = 'images';
            resolve(img);
        };

        img.oneerror = (error) => {
            reject(`画像の読み込みに失敗しました: ${error}`);
        };
    });
};


const wait = (seconds) => {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
    });
};

const showImage = (img) => {
    img.style.display = 'block';
};

const hideImage = (img) => {
    img.style.display = 'none';
};

const displayImages = async () => {
     try{
        let img = await createImage('first-image.jpeg');
        document.querySelector('.relative').appendChild(img);
        showImage(img);
        await wait(WAIT_TIME);
        hideImage(img);

        img = await createImage('second-image.jpeg');
        document.querySelector('.relative').appendChild(img);
        showImage(img);
        await wait(WAIT_TIME);
        hideImage(img);
     } catch (error){
        console.error(error);
     }
    };

    displayImages();

