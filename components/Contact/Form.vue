<template>
  <section class="contactForm">
    <h1 class="contactForm__title">
      Bizə <span class="contactForm__span">Yazın</span>
    </h1>

    <form
      :class="['contactForm__form', success ? 'd-none' : 'block']"
      action=""
      @submit.prevent="createPost"
    >
      <div class="contactForm__form-group">
        <label class="contactForm__form-label" for="fullName"
          >Adınız və soyadınız</label
        >
        <input
          class="contactForm__form-input"
          id="fullName"
          name="fullName"
          maxlength="255"
          @keydown="
            (e) =>
              !/[a-zöüğəıçşйцукенгшщзхъфывапролджэячсмитьбюё]/i.test(e.key) &&
              e.preventDefault()
          "
          type="text"
          v-model="full_name"
          placeholder="Məlumatları daxil edin"
        />

        <p
          id="phppot-message"
          :class="msg_full_name ? 'error-alert' : 'd-none'"
        >
          {{ msg_full_name }}
        </p>
      </div>
      <div class="contactForm__form-group">
        <label class="contactForm__form-label" for="email"
          >E-mail ünvanınız</label
        >
        <input
          class="contactForm__form-input"
          id="email"
          name="email"
          type="email"
          maxlength="255"
          v-model="email"
          placeholder="E-mail ünvanınızi daxil edin"
        />

        <p :class="msg_email ? 'error-alert' : 'd-none'">{{ msg_email }}</p>
      </div>

      <div class="contactForm__form-group">
        <label class="contactForm__form-label" for="phone"
          >Əlaqə nömrəniz</label
        >
        <input
          class="contactForm__form-input"
          id="phone"
          name="phone"
          type="tel"
          v-mask="{ mask: `+\\9\\94(##)###-##-##` }"
          @keyup="regexNum"
          oncontextmenu="return false"
          @keydown="
            (e) => {
              !/[1-9()+0Backspace]/i.test(e.key) && e.preventDefault();
            }
          "
          v-model="phone"
          placeholder="Əlaqə nömrənizi daxil edin"
        />
        <!-- @keydown="(e) => !/[1-90()+]/i.test(e.key) && e.preventDefault()" -->

        <p :class="msg_phone ? 'error-alert' : 'd-none'">{{ msg_phone }}</p>
      </div>

      <div class="contactForm__form-group">
        <label class="contactForm__form-label" for="phone"
          >Sualınız və ya mesajınız</label
        >
        <textarea
          class="contactForm__form-input contactForm__form-textarea"
          name=""
          id="textareaMsg"
          maxlength="500"
          v-model="message"
          placeholder="Məlumatları daxil edin"
        ></textarea>
        <p :class="msg_message ? 'error-alert' : 'd-none'">{{ msg_message }}</p>
      </div>

      <div class="contactForm__form-submit">
        <input class="" type="submit" value="Göndər" />
      </div>
    </form>

    <div :class="success ? 'block' : 'd-none'">
      <div class="success__box">
        <img
          loading="lazy"
          class="contactForm__form-img"
          src="../../assets/image/success.svg"
          alt="baleoni success"
        />
        <span class="success__box-text">Mesajınız uğurla göndərildi</span>
      </div>
      <button class="aginForm" @click="aginForm">Yenidən Göndər</button>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      full_name: "",
      email: "",
      phone: "",
      message: "",

      msg_full_name: null,
      msg_email: null,
      msg_phone: null,
      msg_message: null,
      success: false,
      numberErorr: false,
    };
  },

  methods: {
    aginForm() {
      this.success = false;
    },
    async createPost() {
      let formData = new FormData();

      formData.append("full_name", this.full_name);
      formData.append("email", this.email);
      formData.append("phone", this.phone.replace(/[^0-9 ]/g, ""));
      formData.append("message", this.message);

      await this.$axios
        .$post("/send", formData)
        .then((res) => {
          if (res.success === true) {
            this.msg_full_name = null;
            this.msg_phone = null;
            this.msg_email = null;
            this.msg_message = null;

            this.full_name = null;
            this.email = null;
            this.phone = null;
            this.message = null;

            this.success = true;
          }
        })
        .catch((e) => {
          if (e.response.status === 422) {
            this.msg_full_name = e.response.data.data.full_name?.[0];
            this.msg_phone = e.response.data.data.phone?.[0];
            this.msg_email = e.response.data.data.email?.[0];
            this.msg_message = e.response.data.data.message?.[0];
            setTimeout(() => {
              this.msg_full_name = null;
              this.msg_phone = null;
              this.msg_email = null;
              this.msg_message = null;
            }, 4000);

            this.success = false;
          }
        });
    },

    regexNum(e) {
      let maskValue = e.target.value;
      const regExp = /\(([^)]+)\)/;
      //  const regExp = /^\d+$/;

      const pasteBox = document.getElementById("phone");
      pasteBox.onpaste = (e) => {
        e.preventDefault();
        return false;
      };

      pasteBox.addEventListener("keydown", function (event) {
        if (
          event.keyCode === 37 ||
          event.keyCode === 39 ||
          event.keyCode === 40 ||
          event.keyCode === 38 ||
          event.keyCode === 65 ||
          event.keyCode === 66 ||
          event.keyCode === 67 ||
          event.keyCode === 69 ||
          event.keyCode === 68 ||
          event.keyCode === 70
        ) {
          event.preventDefault();
        }
      });
      let matches = regExp.exec(maskValue);

      const prefix = [10, 50, 51, 55, 60, 77, 70, 99];

      if (maskValue.length > 0) {
        if (
          !prefix.includes(parseInt(matches[1].replace(/\D+/g, ""))) &&
          matches[1].indexOf("_") == -1
        ) {
          this.phone = null;
          this.numberErorr = true;

          setTimeout(() => {
            this.numberErorr = false;
          }, 2500);
        } else {
          this.numberErorr = false;
        }
      }
    },
  },
};
</script>