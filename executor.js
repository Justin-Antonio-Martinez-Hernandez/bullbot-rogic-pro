let stopRequested = false;

async function runProgram() {

  stopRequested = false;

  for(const block of workspace) {

    if(stopRequested) return;

    console.log('Executing', block.type);

    await delay(300);
  }
}

function stopProgram() {
  stopRequested = true;
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
