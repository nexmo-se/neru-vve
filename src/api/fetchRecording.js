import axios from 'axios';
let API_URL = `${window.location.origin}/archive`;

const fetchRecordings = (sessionId) => {
  return axios.get(`${API_URL}/${sessionId}`);
};

const startRecording = (sessionId) => {
  return axios.post(`${API_URL}/start`, {
    session_id: sessionId,
  });
};

const stopRecording = (archiveId) => {
  return axios.get(`${API_URL}/stop/${archiveId}`);
};

export { fetchRecordings, startRecording, stopRecording };
