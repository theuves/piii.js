module.exports = {

    // lista semi-pronta de expressões regulares para corresponder palavrões
    lista: [
        '(c|k)(u|uh|u(z|s)inho(((z|s)inho)+)?|u(zao)+(((z|s)inho)+)?|uzona(((z|s)inha)+)?)',
        '(c|k)ara(l(h|e|i)|i)(o((z|s)inho|(z|s)ao)?|inho((z|s)inho)?|ao|ada|ud(o|a))',
        '(c|k)arai(o((z|s)inho|(z|s)ao)?|nho((z|s)inho)?|ao|ada)',
        '(pe?pe?)((k|c)(a((z|s)inha)?|ao|ona)|(qu|k)inha)',
        'b(u|o)cet(a((z|s)ona|(z|s)inha)?|inha((z|s)inha)?|ona|ao|ud(a|o))',
        'b(i|y)lau((z|s)inho|zao)?',
        'fdp|pqp|fuck|ppk|vtnc|vsf|(k|c)rlh?|bct',
        '(ph|f)(o|ou)d(endo|id(o|a)(s)?|o|(e|i)(s)?|emo(s)?|ei(s)?|em|ia(s)?|iamo(s)?|iei(s)?|iam|i|este|eu|este(s)?|eram|(e|i)ra(s)?|(e|i)rei(s)?|(e|i)r(e|a)mo(s)?|(e|i)rao|(e|i)ria(s)?|(e|i)riamo(s)?|(e|i)riei(s)?|(e|i)riam|a(s)?|amo(s)?|ai(s)?|am|(e|i)(s|c)e(s)?|(e|i)(s|c)emo(s)?|(e|i)(s|c)ei(s)?|(e|i)(s|c)em|er|ere(s)?|ermo(s)?|erdes|erem|amo|ermo(s)?|inha|ona|ao|astic(o|a))',
        '(ph|f)ud(endo|id(o|a)(s)?|emo(s)?|ei(s)?|ia(s)?|iamo(s)?|iei(s)?|iam|i|este|eu|este(s)?|eram|(e|i)ra(s)?|(e|i)rei(s)?|(e|i)r(e|a)mo(s)?|(e|i)rao|(e|i)ria(s)?|(e|i)riamo(s)?|(e|i)riei(s)?|(e|i)riam|(e|i)(s|c)e(s)?|(e|i)(s|c)emo(s)?|(e|i)(s|c)ei(s)?|(e|i)(s|c)em|er|ere(s)?|ermo(s)?|erdes|erem|amo|ermo(s)?|inha|ona|ao|astic(o|a))',
        'p(u|o)nhet(a((z|s)inha)?|inha|ao|ona)',
        'pint(o((z|s)inho|zao)?|inho|ao)',
        'piro((c|k)(a((z|s)inha)?|o|ona|ao)|(qu|k)inha)',
        'po(rr|h)(a|inha(((z|s)inha)+)?|(ona)+(((z|s)inha)+)?|(ao)+)',
        'put(a|inha|o|ona|ao)'
    ],

    // funcão para ignorar números que possam substituir letras
    ignorarLeet: function (lista) {
        return lista.map(function (array) {
            return array.replace(/(\w)/g, '$1+').replace(/a/g, '[a24\@]').replace(/e/g, '[e3\&]').replace(/g/g, '[g9').replace(/i/g, '[i1]').replace(/l/g, '[l1]').replace(/o/g, '[o08\@]').replace(/q/g, '[q9]').replace(/t/g, '[t7]').replace(/s/g, '[s5\$]');;
        });
    },

    // transformar array em expressão regular
    criarRegExp: function (lista) {
        return new RegExp('\\b((' + lista.join(')|(') + '))*\\b', 'gi');
    }
};
