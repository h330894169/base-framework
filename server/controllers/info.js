/**
 * Created by jerryli on 2017/6/15.
 */
exports.info = async function (ctx,next) {
    const value = await function(){
      const value2 = new Promise((resolve,reject)=>{
        setTimeout(function () {
          resolve(1)
        },2000);
      });
      console.log(value2);
      return 1234;
    }()
    console.log(value);
    ctx.body =  `hello1`;
    await next()

};