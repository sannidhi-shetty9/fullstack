import React, { useState, useEffect } from 'react';

const AudioRecorder = () => {
  const [audioContext, setAudioContext] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [audioPlayer, setAudioPlayer] = useState(new Audio());
  const [amplitudeInterval, setAmplitudeInterval] = useState(null);

  useEffect(() => {
    if (audioContext) {
      // Clean up the AudioContext when the component unmounts
      return () => {
        audioContext.close();
      };
    }
  }, [audioContext]);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const newMediaRecorder = new MediaRecorder(stream);
        setMediaRecorder(newMediaRecorder);

        // Ensure the AudioContext is created or resumed within a user gesture
        const newAudioContext = new (window.AudioContext || window.webkitAudioContext)();
        setAudioContext(newAudioContext);

        const audioSource = newAudioContext.createMediaStreamSource(stream);
        const analyser = newAudioContext.createAnalyser();
        analyser.fftSize = 256;
        const dataArray = new Uint8Array(analyser.fftSize);

        audioSource.connect(analyser);

        newMediaRecorder.ondataavailable = event => {
          if (event.data.size > 0) {
            setRecordedChunks(prevChunks => [...prevChunks, event.data]);
          }
        };

        newMediaRecorder.onstop = () => {
          clearInterval(amplitudeInterval);
          const audioBlob = new Blob(recordedChunks, { type: 'audio/wav' });
          const newAudioPlayer = new Audio(URL.createObjectURL(audioBlob));
          setAudioPlayer(newAudioPlayer);
          setRecordedChunks([]);
          console.log('media recorder stopped')
        };

        const newAmplitudeInterval = setInterval(() => {
          analyser.getByteTimeDomainData(dataArray);
          logAmplitude(dataArray);
        }, 1000);

        setAmplitudeInterval(newAmplitudeInterval);

        newMediaRecorder.start();
      })
      .catch(error => console.error('Error accessing microphone:', error));
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        console.log('try mediarecorder stop....')
      mediaRecorder.stop();
    }
  };

  const playAudio = () => {
    audioPlayer.play();
  };

  const logAmplitude = dataArray => {
    const amplitude = getAmplitude(dataArray);
    console.log('Amplitude:', amplitude);
  };

  const getAmplitude = dataArray => {
    const sum = dataArray.reduce((acc, value) => acc + Math.abs(value / 128.0 - 1), 0);
    return sum / dataArray.length;
  };

  return (
    <div>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording} disabled={!mediaRecorder || mediaRecorder.state === 'inactive'}>
        Stop Recording
      </button>
      <button onClick={playAudio} disabled={!audioPlayer.src}>Play Audio</button>

      <audio controls ref={audio => (audioPlayer.src = audio?.src)} />
    </div>
  );
};

export default AudioRecorder;




----------------------------------

Certainly! Let's break down the code step by step:

1. **State Initialization:**
   ```jsx
   const [audioContext, setAudioContext] = useState(null);
   const [mediaRecorder, setMediaRecorder] = useState(null);
   const [recordedChunks, setRecordedChunks] = useState([]);
   const [audioPlayer, setAudioPlayer] = useState(new Audio());
   const [amplitudeInterval, setAmplitudeInterval] = useState(null);
   ```

   - `audioContext`: Represents the audio processing graph built from audio sources in the `AudioContext` interface.
   - `mediaRecorder`: Represents the media recorder object used to record audio.
   - `recordedChunks`: An array to store chunks of recorded audio data.
   - `audioPlayer`: Represents the audio player element for playback.
   - `amplitudeInterval`: A reference to the interval used for logging amplitude.

2. **Effect Hook for Cleaning Up AudioContext:**
   ```jsx
   useEffect(() => {
     if (audioContext) {
       // Clean up the AudioContext when the component unmounts
       return () => {
         audioContext.close();
       };
     }
   }, [audioContext]);
   ```

   - This effect hook is responsible for cleaning up the `AudioContext` when the component is unmounted.

3. **`startRecording` Function:**
   ```jsx
   const startRecording = () => {
     navigator.mediaDevices.getUserMedia({ audio: true })
       .then(stream => {
         // ... (code to set up audio recording and analysis)

         newMediaRecorder.start();
       })
       .catch(error => console.error('Error accessing microphone:', error));
   };
   ```

   - Requests access to the user's microphone using `getUserMedia`.
   - Sets up an `AudioContext`, connects the microphone stream to an analyser node for amplitude analysis, and starts recording with a `MediaRecorder`.
   - Updates state and starts an interval to log amplitude.

4. **`stopRecording` Function:**
   ```jsx
   const stopRecording = () => {
     if (mediaRecorder && mediaRecorder.state !== 'inactive') {
       mediaRecorder.stop();
     }
   };
   ```

   - Stops the recording if the `MediaRecorder` is active.

5. **`playAudio` Function:**
   ```jsx
   const playAudio = () => {
     audioPlayer.play();
   };
   ```

   - Initiates playback of the recorded audio.

6. **`logAmplitude` and `getAmplitude` Functions:**
   ```jsx
   const logAmplitude = dataArray => {
     const amplitude = getAmplitude(dataArray);
     console.log('Amplitude:', amplitude);
   };

   const getAmplitude = dataArray => {
     const sum = dataArray.reduce((acc, value) => acc + Math.abs(value / 128.0 - 1), 0);
     return sum / dataArray.length;
   };
   ```

   - `logAmplitude` logs the amplitude value obtained from `getAmplitude`.
   - `getAmplitude` calculates the average amplitude of the audio data.

7. **Rendering:**
   ```jsx
   return (
     <div>
       <button onClick={startRecording}>Start Recording</button>
       <button onClick={stopRecording} disabled={!mediaRecorder || mediaRecorder.state === 'inactive'}>
         Stop Recording
       </button>
       <button onClick={playAudio} disabled={!audioPlayer.src}>Play Audio</button>

       <audio controls ref={audio => (audioPlayer.src = audio?.src)} />
     </div>
   );
   ```

   - Renders buttons for starting, stopping recording, and playing audio.
   - Renders an `<audio>` element for controlling and displaying the audio player.

This component creates a simple audio recorder and player using React. Users can start recording audio, stop the recording, and play back the recorded audio. The amplitude of the audio is also logged during recording.


--------------------
Certainly! Let's dive into the `startRecording` function, which is responsible for initiating the audio recording process when the "Start Recording" button is clicked:

```jsx
const startRecording = () => {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      // ... (code to set up audio recording and analysis)

      newMediaRecorder.start();
    })
    .catch(error => console.error('Error accessing microphone:', error));
};
```

1. **`navigator.mediaDevices.getUserMedia({ audio: true })`:**
   - This line initiates a request for the user's microphone using the `getUserMedia` API. The promise returned by this function resolves with a `MediaStream` object representing the audio stream from the user's microphone.

2. **`.then(stream => { ... })`:**
   - The `then` block is executed when the user grants access to the microphone. The `stream` variable contains the audio stream.

3. **`// ... (code to set up audio recording and analysis)`:**
   - This part of the code involves setting up the necessary components for audio recording and analysis. Let's break it down:

     - **Creating a new `MediaRecorder`:**
       ```jsx
       const newMediaRecorder = new MediaRecorder(stream);
       setMediaRecorder(newMediaRecorder);
       ```
       - Creates a new `MediaRecorder` instance, which allows recording media (in this case, audio).
       - Sets the `mediaRecorder` state with the newly created `MediaRecorder`.

     - **Creating and configuring an `AudioContext`:**
       ```jsx
       const newAudioContext = new (window.AudioContext || window.webkitAudioContext)();
       setAudioContext(newAudioContext);
       ```
       - Creates a new `AudioContext` (the audio processing interface) or uses the vendor-prefixed version if the standard one is not supported.
       - Sets the `audioContext` state with the newly created `AudioContext`.

     - **Connecting the microphone stream to an `AnalyserNode`:**
       ```jsx
       const audioSource = newAudioContext.createMediaStreamSource(stream);
       const analyser = newAudioContext.createAnalyser();
       analyser.fftSize = 256;
       const dataArray = new Uint8Array(analyser.fftSize);

       audioSource.connect(analyser);
       ```
       - Creates an `AnalyserNode` to perform real-time analysis on the audio data.
       - Sets the FFT (Fast Fourier Transform) size for frequency analysis.
       - Creates a `Uint8Array` to hold the amplitude data.
       - Connects the microphone stream to the analyser node.

     - **Setting up event listeners for the `MediaRecorder`:**
       ```jsx
       newMediaRecorder.ondataavailable = event => {
         if (event.data.size > 0) {
           setRecordedChunks(prevChunks => [...prevChunks, event.data]);
         }
       };

       newMediaRecorder.onstop = () => {
         clearInterval(amplitudeInterval);
         const audioBlob = new Blob(recordedChunks, { type: 'audio/wav' });
         const newAudioPlayer = new Audio(URL.createObjectURL(audioBlob));
         setAudioPlayer(newAudioPlayer);
         setRecordedChunks([]);
       };
       ```
       - Listens for the `dataavailable` event, which is triggered when the `MediaRecorder` has new data available (a chunk of recorded audio).
       - Appends the new data chunk to the `recordedChunks` state.
       - Listens for the `stop` event, which is triggered when the recording is stopped.
       - Clears the amplitude logging interval.
       - Creates a `Blob` from the recorded chunks and sets up a new `Audio` element with the audio blob as the source.
       - Updates the `audioPlayer` state with the new audio player.
       - Clears the `recordedChunks` state.

     - **Setting up an interval for amplitude logging:**
       ```jsx
       const newAmplitudeInterval = setInterval(() => {
         analyser.getByteTimeDomainData(dataArray);
         logAmplitude(dataArray);
       }, 1000);

       setAmplitudeInterval(newAmplitudeInterval);
       ```
       - Sets up an interval to periodically log the amplitude of the audio signal.
       - Uses the `getByteTimeDomainData` method of the analyser node to obtain amplitude data.
       - Calls the `logAmplitude` function with the amplitude data.
       - Sets the interval ID to the `amplitudeInterval` state.

4. **`newMediaRecorder.start();`:**
   - Initiates the recording process using the `start` method of the `MediaRecorder`.
   - The audio recording is now in progress.

5. **`.catch(error => console.error('Error accessing microphone:', error));`:**
   - Handles errors that may occur during the process, such as if the user denies access to the microphone.
   - Logs an error message to the console.

In summary, the `startRecording` function sets up the necessary components for audio recording and analysis, starts recording using the `MediaRecorder`, and establishes an interval for logging amplitude data. The function handles errors related to microphone access.