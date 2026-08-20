export function classifyProduct(name = '', wholeCategoryName = '') {
  const n = `${name} ${wholeCategoryName}`.toLowerCase();

  if (/색소폰|saxophone|sax\b/.test(n)) return { group: '관악기', sub: '색소폰' };
  if (/플룻|플루트|피콜로|flute|piccolo/.test(n)) return { group: '관악기', sub: '플룻·피콜로' };
  if (/클라리넷|clarinet/.test(n)) return { group: '관악기', sub: '클라리넷' };
  if (/오보에|바순|oboe|bassoon/.test(n)) return { group: '관악기', sub: '오보에·바순' };
  if (/트럼펫|코넷|trumpet|cornet/.test(n)) return { group: '관악기', sub: '트럼펫·코넷' };
  if (/트롬본|트럼본|trombone/.test(n)) return { group: '관악기', sub: '트롬본' };
  if (/호른|horn/.test(n)) return { group: '관악기', sub: '호른' };
  if (/튜바|유포늄|유포니움|tuba|euphonium/.test(n)) return { group: '관악기', sub: '튜바·유포늄' };

  if (/바이올린|violin/.test(n)) return { group: '현악기', sub: '바이올린' };
  if (/비올라|viola/.test(n)) return { group: '현악기', sub: '비올라' };
  if (/첼로|cello/.test(n)) return { group: '현악기', sub: '첼로' };
  if (/콘트라베이스|더블베이스|contrabass|double bass/.test(n)) return { group: '현악기', sub: '콘트라베이스' };
  if (/하프|harp/.test(n)) return { group: '현악기', sub: '하프' };

  if (/전자드럼|electronic drum|v-drums|vdrums/.test(n)) return { group: '타악기', sub: '전자드럼' };
  if (/팀파니|timpani/.test(n)) return { group: '타악기', sub: '팀파니' };
  if (/마림바|marimba/.test(n)) return { group: '타악기', sub: '마림바' };
  if (/드럼|drum/.test(n)) return { group: '타악기', sub: '드럼' };

  if (/가야금/.test(n)) return { group: '국악기', sub: '가야금' };
  if (/거문고/.test(n)) return { group: '국악기', sub: '거문고' };
  if (/아쟁/.test(n)) return { group: '국악기', sub: '아쟁' };
  if (/해금/.test(n)) return { group: '국악기', sub: '해금' };
  if (/장구/.test(n)) return { group: '국악기', sub: '장구' };

  if (/아코디언|아코디온|accordion/.test(n)) return { group: '건반악기', sub: '아코디언' };
  if (/신디사이저|신디|키보드|synthesizer|keyboard/.test(n)) return { group: '건반악기', sub: '신디사이저·키보드' };

  if (/반주기|엘프|elf\b|금영|kumyoung/.test(n)) return { group: '음향·반주기', sub: '반주기' };
  if (/스피커|앰프|마이크|믹서|speaker|amplifier|\bamp\b|microphone|mixer/.test(n)) return { group: '음향·반주기', sub: '음향장비' };

  return { group: '기타', sub: '기타' };
}
