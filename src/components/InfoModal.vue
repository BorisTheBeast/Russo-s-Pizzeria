
<template>
  <div
    class="modal"
    id="myModal"
    role="dialog"
    @click="$store.commit('setModalInfo', modalInfo[0])"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <span class="close" data-dismiss="modal" aria-hidden="true"
          >Закрыть</span
        >

        <div class="popup-container">
          <div class="modal-header">{{ modalInfo[0].name }}</div>
            <div class="figure-item">
              <div class="figure-item__area">
                <img
                  :src=modalInfo[0].photo
                  alt=""
                  style="width: 60%"
                />
              </div>
            </div>

            <form class="modal-item-info">
              <p>{{ modalInfo[0].body }}</p>

              <div class="goods__list__chks">
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="p_p_size_1"
                      name="p_size33"
                      value="big"
                    />
                    <label for="p_p_size_1">
                      <span>Большая</span>
                    </label>
                  </li>
                </ul>
              </div>
              <div class="goods__list__cost">
                <div class="goods__list__buttons">
                  <button class="in-cart popup-in-cart" type="button">
                    <span class="txt">В корзину</span><span class="ico"></span>
                  </button>
                </div>
                <span class="goods__list__cost__value pizza-price">{{ modalInfo[0].price }}$</span
                ><br />
                <span class="pizza-weight">0,8–0,9 кг</span>
              </div>
            </form>
            <div class="modal-item-ingr">
              <h3>Пищевая ценность продукта:</h3>

              <p>
                Калории <span class="pizza-calories">2268</span> ккал<br />
                Углеводы <span class="pizza-carbohydrates">237</span> гр.<br />
                Белки <span class="pizza-proteins">71</span> гр.<br />
                Жиры <span class="pizza-fats">108</span> гр.
              </p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'info-modal',
  computed: {
    ...mapState({
      modalInfo: state => state.modalInfo
    })
  }
}

</script>
<style>
.fade:not(.show) {
    opacity: 100;
}
.modal.in {
    display: none;
}
</style>
