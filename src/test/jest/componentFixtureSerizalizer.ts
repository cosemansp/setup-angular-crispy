import { ComponentFixture } from '@angular/core/testing';
import * as cheerio from 'cheerio';
import * as pretty from 'pretty';

function serializeElement(element) {
  const serialized = element.outerHTML;
  const cleanup = removeAngularSpecificMarkup(serialized);
  return pretty(cleanup, {ocd: true});
}

function removeAngularSpecificMarkup(content: string) {
  const $ = cheerio.load(content, {
    normalizeWhitespace: true,
    xmlMode: true
  });

  $('*').each((_, element) => {
    const attribs = Object.keys(element.attribs)
      .filter(attr => !(attr.startsWith('_ng')))
      .reduce((all, next) => {
        return Object.assign(all, { [next]: element.attribs[next] });
      }, {});

    element.attribs = attribs;
  });

  $.root().find('*').contents().filter((_, element) => element.type === 'comment').remove();
  // skip first div, is root component
  return $('div').html();
}

export const componentFixtureSerializer = {
  test(val) {
    return (val instanceof ComponentFixture);
  },

  print(val, print) {
    const element = val.debugElement.nativeElement;
    return serializeElement(element)
  },
}
