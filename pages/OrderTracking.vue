<template>
  <div>
      <div id="YQContainer" class="uk-section-muted uk-section">
            <div class="uk-container">
                <div class="tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack" uk-grid="">
                    <div class="uk-width-1-1@m uk-first-column">
                        <h1 class="uk-text-center">  Order Tracking</h1>
                        <h4 class="uk-text-muted uk-text-center">
                            <p><span style="font-weight: 400;">Enter your tracking number to find out the status of your
                                    order, which you can find in your order confirmation email.</span></p>
                        </h4>
                        <div>
                            <!--单号输入框。-->
                            <div class="uk-grid-small uk-margin-large-bottom uk-grid" uk-grid="">
                                <div class="uk-width-expand uk-first-column">
                                    <input class="uk-input"
                                           style="border-radius:20px;"
                                           type="text"
                                           id="tracking_code"
                                           maxlength="50"
                                           placeholder="Enter your tracking number">
                                </div>
                                <!--用于调用脚本方法的按钮。-->
                                <div class="uk-width-auto">
                                    <input class="uk-button uk-button-primary"
                                            type="button"
                                            value="TRACK"
                                            onclick="doTrack()">
                                </div>
                            </div>
                            <div id="show" style="display: none;">
                                <div class="uk-align-center uk-card uk-card-default uk-width-2xlarge  uk-margin-bottom">
                                    <div class="uk-card-header"
                                        style="background-color: #cdd2d1; border-top-left-radius: 10px;border-top-right-radius: 10px;">
                                        <div class="uk-grid-small uk-grid uk-grid-stack" uk-grid="">
                                            <div class="uk-width-auto"
                                                 style="margin-top:20px">
                                                <img loading="lazy"
                                                      width="40"
                                                      height="40"
                                                  >
                                            </div>
                                            <div id="card_tittle" class="uk-width-expand">
                                                <!-- 插入区域 -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-card-body">
                                        <dl id="card_body" class="uk-description-list uk-margin-large-left">
                                            <!-- 插入区域2 -->
                                        </dl>
                                    </div>
                                    <div class="uk-card-footer">
                                        <p>If you have any questions, please contact our customer service agent. <a
                                                href="mailto:service@sleepon.us">service@sleepon.us</a></p>
                                    </div>
                                </div>
                            </div>
                            <div id="show_err" style="display: none;">
                                <div class="uk-align-center uk-card uk-card-default uk-width-2xlarge uk-margin-bottom">
                                    <div class="uk-card-header"
                                        style="background-color: #cdd2d1; border-top-left-radius: 10px;border-top-right-radius: 10px;">
                                        <div class="uk-grid-small uk-grid uk-grid-stack" uk-grid="">
                                            <div class="uk-width-auto" style="margin-top:20px">
                                                <img loading="lazy"
                                                      width="40"
                                                      height="40"
                                                   >
                                            </div>
                                            <div id="card_err_tittle" class="uk-width-expand">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-card-body">
                                        <h3>Sorry, we can’t find your order. Please check the tracking number you
                                            entered.</h3>
                                    </div>
                                    <div class="uk-card-footer">
                                        <p>If you have any questions, please contact our customer service agent. <a
                                                href="mailto:service@sleepon.us">service@sleepon.us</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>

</style>
