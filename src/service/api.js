import axios from "axios";

//https://hackmd.io/@FortesHuang/SycpsQ08B
export const api = {
  get: (url, params) => {
    return new Promise((resolve, inject) => {
      axios
        .get(url, {
          params: params,
        })
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          inject(error);
        });
    });
  },
  post: (url, params) => {
    return new Promise((resolve, inject) => {
      axios
        .post(url, params)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          inject(error);
        });
    });
  },
};

//https://medium.com/i-am-mike/%E4%BD%BF%E7%94%A8axios%E6%99%82%E4%BD%A0%E7%9A%84api%E9%83%BD%E6%80%8E%E9%BA%BC%E7%AE%A1%E7%90%86-557d88365619

const peopleRequest = axios.create({
  baseURL: "https://randomuser.me/api/",
});

export const apiPeopleData = (count) =>
  peopleRequest.get(`?inc=gender,name,picture&results=${count}`);
