const CopyUrl = (url) =>
  new Promise((resolve, reject) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        console.log('URL copied to clipboard:', url);
        resolve();
      })
      .catch((error) => {
        console.error('Error copying URL:', error);
        reject(error);
      });
  });

export default CopyUrl;
