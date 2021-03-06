Vue.component("timeline", {
  template: "#timeline"
});
const app = new Vue({
  el: "#app",
  data: () => ({
    // fixed: false,
    items: "",
    title: "HighScheduler",

    dialog: false,

    direction: "top",
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: false,
    right: true,
    bottom: true,
    left: false,
    transition: "slide-y-reverse-transition",
    fixed: true,

    //Subject Form data
    subjects: [],
    valid: false,
    subject: "",
    subjectRules: [v => !!v || "Subject is required"],
    begins: "",
    beginsRules: [v => !!v || "Beginning time is required"],
    ends: "",
    endsRules: [v => !!v || "Ending time is required"]
  }),
  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    }
  },
  computed: {
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { class: "purple", icon: "account_circle" };
        case "two":
          return { class: "red", icon: "edit" };
        case "three":
          return { class: "green", icon: "keyboard_arrow_up" };
        default:
          return {};
      }
    }
  },

  methods: {
    addSubject: function() {
      this.dialog = false;
      this.subjects.push({
        subject: this.subject,
        beginTime: moment(this.begins, ['h:m a', 'H:m']),
        endTime: moment(this.ends, ['h:m a', 'H:m'])
      });
    }
  }
});
