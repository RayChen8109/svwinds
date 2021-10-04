<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-12 bandpic"></div>
      <div class="title">
        <blockquote>
          <h4>樂團簡介</h4>
        </blockquote>
        <p>
          <font size="6">齊</font
          >生管樂團創立於2019盛夏，前身為臺中科大揚聲管樂校友團。成立之初是由國立臺中科技大學畢業校友，號召所有管樂團同好者所組成的社區管樂團，走過四年，現今已發展成完整編制之管樂團，並於每年有兩次定期公開演出。<br /><br />樂團中文名取自《莊子》一書中第二篇&lt;齊物論>與第三篇&lt;養生主>中的「齊」與「生」二字。「齊」字並有同時、同步、同調、同心之意，但並不是「統」字一言堂式的強迫整合，而是發自內心的同在，期許我們樂團能同心齊進，演奏出動人的和聲。「生」即為生命、生活，我們樂團想藉由音樂藝術去探索生命的本質，感受生命的海湧起落，演繹生命的彩雲變化。「生」也諧音「聲」和「身」，意味著我們樂團的聲音，即為我們的身分與自我認同。期許我們樂團能找到自己的特色，發展獨特的表演藝術，但也與其他藝文團體合作，為臺灣的藝文盡一份心力。<br /><br />英
          文 團 名 部 分，"Simul" 原 為 拉 丁 文， 為 許 多 歐 洲 語 言 的 共 同
          字 根， 其 英 文 字 為"simultaneous" 同步、同調的意思，更有 "together"
          一起、齊同的意思，呼應中文的「齊」字。"Vitae"
          原為拉丁文，是生命、生活的意思。許多英文衍生字都有這個字根，例如：
          vital ( 必要的 )、vitamin ( 維他命 )、vivid ( 生動的 ) 等，因此
          "vita"為一切的根本。取複數型態的"Vitae"，而不是單數的
          "Vita"，正是因為我們樂團是由許多不同背景的人共同組成，我們複數的生命彼此交織、互相依存，成就了各自生命更大的完整。<br /><br />我們致力於推廣藝文活動，企圖作為高深藝術與庶民文化之間的橋樑，將藝術價值普及化，把音樂、人文、藝術融入日常生活當中，希望能落實普世「生活美學」與提升民眾藝文素養；另一方面又能把流行文化、庶民生活以更精緻的藝術型態，重新演繹展現。近年來我們更嘗試多元的表演可能，結合戲劇、文學、哲學、設計、文創等，突破傳統觀眾只能被動聆賞的經驗。觀眾不再只是坐在座位上用耳朵聽，還要用眼睛看、用心去感受，甚至用自己的身體去參與演出其中。我們以「音樂」作為跨越疆界的語言，與不同世代、地區、文化作交流和對話，試圖去感受彼此的特色差異，同時保留自己的論述空間，去探索無限的可能。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bandpic {
  background-image: url("../assets/20200830-204.jpg");
  background-size: cover;
  background-position: 30%;
  width: 100%;
  height: 65vh;
}

.title {
  margin-left: 10%;
  margin-top: 5%;
  width: 80%;

  blockquote {
    border-left-style: solid;
    border-left-width: 0.5rem;
    padding-left: 1.5rem;
    border-color: #ffcc47;
  }

  & p {
    margin-top: 6%;
    margin-bottom: 6%;
    text-align: justify;
    text-justify: distribute;
    line-height: 2rem;
    letter-spacing: 3px;
  }
}
</style>
