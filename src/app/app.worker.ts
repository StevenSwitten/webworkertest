/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  const response = `worker response to ${data}`;
  const start = new Date().valueOf();
  console.log('worker started');
  let diff = new Date().valueOf() - start;
  while (diff !== 10000) {
    if (diff % 100 === 0) {
      console.log(`${diff / 1000} seconds have passed`);
    }
    diff = new Date().valueOf() - start;
  }
  console.log('stopping after  10 seconds');
  postMessage(response);
});
