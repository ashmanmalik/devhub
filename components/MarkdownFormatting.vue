<template>
  <RightAside class="markdown-formatting px-8 pt-8 overflow-y-scroll">
    <h2 class="mb-8">Markdown Formatting</h2>
    <p class="mb-7 text-font-alt3">
      Below we listing the most common shortcuts. Still got stuck? Ask an
      engineer for help or drop your question in the #general slack channel.
    </p>
    <ul class="mb-8">
      <li v-for="(item, key) in items" :key="key" class="mb-10 last:mb-0">
        <h3 class="mb-3">
          {{ item.title }}
        </h3>
        <ul class="text-14">
          <li v-for="(child, c) in item.children" :key="`${key}-${c}`">
            <div class="flex h-8 items-center">
              {{ child.title }}
              <span
                class="ml-auto text-font-alt3 highlighted-code"
                v-html="child.explanation"
              />
            </div>
            <ul v-if="child.props" class="mt-3 pl-4">
              <li
                v-for="(prop, p) in child.props"
                :key="`${key}-${c}-${p}`"
                class="mb-3 last:mb-0"
              >
                <div class="flex">
                  <span class="font-mono">
                    {{ prop.title }}
                  </span>
                  <span
                    class="ml-auto text-font-alt3 highlighted-code"
                    v-html="prop.explanation"
                  />
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </RightAside>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class MarkdownFormatting extends Vue {
  items = [
    {
      title: 'Default',
      children: [
        {
          title: 'Bold',
          explanation: '<code>**Bold**</code>',
        },
        {
          title: 'Italic',
          explanation: '<code>_Italic_</code>',
        },
        {
          title: 'Strikethrough',
          explanation: '<code>~~Strike~~</code>',
        },
        {
          title: 'Link',
          explanation: '<code>[Desc](link)</code>',
        },
      ],
    },
    {
      title: 'Headers',
      children: [
        {
          title: 'Heading 1',
          explanation: '<code>#</code> + <code>space</code>',
        },
        {
          title: 'Heading 2',
          explanation: '<code>##</code> + <code>space</code>',
        },
        {
          title: 'Heading 3',
          explanation: '<code>###</code> + <code>space</code>',
        },
      ],
    },
    {
      title: 'List',
      children: [
        {
          title: 'Basic list',
          explanation: '<code>-</code> + <code>space</code>',
        },
        {
          title: 'Ordered list',
          explanation: '<code>1.</code> + <code>space</code>',
        },
      ],
    },
    {
      title: 'Buttons',
      children: [
        {
          title: 'Button',
          explanation: '<code>&lt;c-button&gt;</code>',
          props: [
            {
              title: 'sm, md, lg',
              explanation: '<code>size</code>',
            },
            {
              title: 'body, alt, alt2, accent, error, success, note',
              explanation: '<code>color</code>',
            },
            {
              title: 'string',
              explanation: '<code>title</code>',
            },
          ],
        },
      ],
    },
    {
      title: 'Tag',
      children: [
        {
          title: 'Tag',
          explanation: '<code>&lt;c-tag&gt;</code>',
          props: [
            {
              title: 'accent, note, alt, alt2',
              explanation: '<code>color</code>',
            },
            {
              title: 'primary, secondary',
              explanation: '<code>type</code>',
            },
            {
              title: 'string',
              explanation: '<code>title</code>',
            },
          ],
        },
      ],
    },
    {
      title: 'Steps',
      children: [
        {
          title: 'Top-level',
          explanation: '<code>&lt;steps&gt;</code>',
        },
        {
          title: 'Single step',
          explanation: '<code>&lt;step&gt;</code>',
          props: [
            {
              title: 'string',
              explanation: '<code>img</code>',
            },
            {
              title: 'string',
              explanation: '<code>title</code>',
            },
          ],
        },
      ],
    },
    {
      title: 'Guides',
      children: [
        {
          title: 'Top-level',
          explanation: '<code>&lt;guides&gt;</code>',
          props: [
            {
              title: 'string',
              explanation: '<code>title</code>',
            },
          ],
        },
        {
          title: 'Single guide',
          explanation: '<code>&lt;step&gt;</code>',
          props: [
            {
              title: 'string',
              explanation: '<code>img</code>',
            },
            {
              title: 'string',
              explanation: '<code>href</code>',
            },
          ],
        },
      ],
    },
    {
      title: 'Examples',
      children: [
        {
          title: 'Top-level',
          explanation: '<code>&lt;examples&gt;</code>',
          props: [
            {
              title: 'string',
              explanation: '<code>title</code>',
            },
          ],
        },
        {
          title: 'Single example',
          explanation: '<code>&lt;example&gt;</code>',
          props: [
            {
              title: 'string',
              explanation: '<code>title</code>',
            },
            {
              title: 'string',
              explanation: '<code>description</code>',
            },
            {
              title: 'string',
              explanation: '<code>img</code>',
            },
            {
              title: 'string',
              explanation: '<code>category</code>',
            },
            {
              title: 'string',
              explanation: '<code>tagLine</code>',
            },
            {
              title: 'string',
              explanation: '<code>href</code>',
            },
          ],
        },
      ],
    },
  ]
}
</script>
