import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("http://localhost:5165/listarcontatos");
  }

  get(id) {
    return http.get(`http://localhost:5165/buscar/${id}`);
  }

  create(data) {
    return http.post("http://localhost:5165/CadastrarContatos", data);
  }

  update(id,data) {
    return http.put(`http://localhost:5165/AtualizarContato/${id}`, data);
  }

  delete(id) {
    return http.delete(`http://localhost:5165/Contato/${id}`);
  }

}

export default new TutorialDataService();
