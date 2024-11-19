import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("http://localhost:5226/Agenda");
  }

  get(id) {
    return http.get(`https://localhost:7201/Agenda/${id}`);
  }

  create(data) {
    return http.post("https://localhost:7201/Agenda", data);
  }

  update(id,data) {
    return http.put(`https://localhost:7201/Agenda/${id}`, data);
  }

  delete(id) {
    return http.delete(`https://localhost:7201/Agenda/${id}`);
  }

}

export default new TutorialDataService();
