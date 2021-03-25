<template>
  <div id="todo">
    <h2 class="page-heading">
      <span class="page-heading__text">
        <span>T</span>o<span>D</span>o <span>L</span>ist
      </span>
    </h2>
    <section class="section container-small">
      <div class="section__head">
      </div>
      <div class="section__body df jcc">
        <ul class="">
          <li class="" v-for="todoList in todoLists" :key="todoList.title">
            <input type="checkbox" v-model="todoList.checkToggle">
            <label v-bind:class={doneTask:todoList.checkToggle}>
              {{ todoList.title }}
            </label>
          </li>
        </ul>
      </div>
      <div class="section__foot">
        <input type="text" v-model="newTitle" v-on:change="checkEntered()" placeholder="新しいタスクを追加する">
        <br>
        <button class="button mb10" v-on:click="addToDoList()" v-bind:class={noclick:!newTitleToggle}>
          [タスクを追加]
        </button>
        <br>
        <button class="button" v-on:click="deleteToDoList()">
          [タスクを削除]
        </button>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  data () {
    return {
      todoLists: [
        { title: '会議資料を作成する', checkToggle: false },
        { title: '取引先にメールを返信する', checkToggle: false },
        { title: '見積書を作成する', checkToggle: false }
      ],
      newTitleToggle: false,
      newTitle: ''
    }
  },
  methods: {
    checkEntered () {
      if (this.newTitle !== '') {
        this.newTitleToggle = true
      } else {
        this.newTitleToggle = false
      }
    },
    addToDoList () {
      this.todoLists.push({
        title: this.newTitle,
        checkToggle: false
      })
      this.newTitleToggle = false
      this.newTitle = ''
    },
    deleteToDoList () {
      this.todoLists = this.todoLists.filter(function (list) {
        return list.checkToggle === false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .doneTask{
    text-decoration: line-through;
  }
  .noclick {
    pointer-events: none;
    user-select: none;
  }
  // .box{
  //   padding: 20px;
  //   background: rgb(74, 231, 68);
  //   margin-top: 20px;
  // }
  // .ttl{
  //   font-size: 50px;
  // }
  // .text{
  //   font-size: 16px;
  // }
  // .pic{
  //   width: 300px;
  //   // margin: 0 auto;
  //   &__box{
  //     margin-top: 50px;
  //     display: flex;
  //     justify-content: center;
  //   }
  // }
</style>
