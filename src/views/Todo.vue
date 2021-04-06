<template>
  <div id="todo">

    <h2 class="page-heading">
      <span class="page-heading__text">
        <span>T</span>o<span>D</span>o <span>L</span>ist
      </span>
    </h2>

    <section class="section container-small">
      <div class="section__body df jcc bg-color-sub">
        <ul class="p20">
          <li v-for="todoList in todoLists" :key="todoList.title" class="todo__list">
            <input type="checkbox" v-model="todoList.checkToggle">
            <label v-bind:class={doneTask:todoList.checkToggle}>
              {{ todoList.title }}
            </label>
          </li>
        </ul>
      </div>
      <div class="section__foot">
        <!-- <input type="text" @keydown.enter="addToDoList()" v-model="newTitle" @change="checkEntered()" placeholder="新しいタスクを追加する" class="input-text todo"> -->
        <input type="text" v-model="newTitle" @change="checkEntered()" placeholder="新しいタスクを追加する" class="input-text todo">
        <button @click="addToDoList()" v-bind:class={noclick:!newTitleToggle} class="button-input todo">
          タスクを追加
        </button>
        <button @click="deleteToDoList()" class="button-input todo">
          タスクを削除
        </button>
      </div>
    </section>

    <div class="code-block">
      <a href="https://gist.github.com/nkanji2188/c833e6e2a26aa992d71dda5dce0b719e" target="blank" class="code-block__link">本ページの主なコードはこちらからご覧になれます。</a>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      todoLists: [
        { title: '会議資料を作成する', checkToggle: false },
        { title: '取引先にメールを返信する', checkToggle: false },
        { title: '見積書を作成する', checkToggle: false },
        { title: '新規開拓案を作成する', checkToggle: false }
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

.todo__list{
  margin-bottom: 10px;
  font-size: 1.6rem;
  color: $color-main;
}

.doneTask{
  text-decoration: line-through;
}
.noclick {
  pointer-events: none;
  user-select: none;
}
</style>
