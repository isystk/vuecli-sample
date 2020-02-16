import axios from 'axios'
import blogData from '../../../public/data/blog.json';

const state = {
  blogs: []
}

const getters = {
  getPostDetail: (state) => (id) => {
    return state.blogs.find(blog => blog.id+'' === id+'');
  }
}

const mutations = {
  setBlogList(state, blogs) {
    state.blogs = blogs;
  }
}

const actions = {
  async getBlogList({ commit }) {
    var isStatic = false;
    var res = (isStatic) ? blogData : await axios.get("./data/blog.json");
    commit('setBlogList', res.data)
    return res.data;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}