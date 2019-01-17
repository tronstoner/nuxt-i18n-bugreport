<template>
  <section class="container">
    <h1>Encoding custom paths breaks RegExps</h1>
    <div>
      <h3>Broken: $router.options.routes</h3>
      <pre>
"/foo/:slug-:id(\\d+)"
becomes:
"/en/foo/:slug-:id(%5Cd+)"</pre><br />
      <pre style="text-align:left;">{{ $router.options.routes }}</pre>
    </div>
    <div></div>
    <div>
      <h3>example</h3>
      <nuxt-link :to="localePath({ name: 'foo-id', params: { slug: 'some-slug', id: 666 } })" >
        broken nuxt-link
      </nuxt-link>
    </div>
    <div>
      <h3>example</h3>
    <pre>localePath({ name: 'foo-id', params: { slug: 'some-slug', id: 666 } })</pre>
    <pre>[vue-router] missing param for named route "foo-id___de": Expected "id" to match "%5Cd+", but received "666"</pre>
    </div>
    <div>
      <h3>nuxt-i18n config</h3>
      <pre>['nuxt-i18n', {
      ...
      pages: {
        'foo/_id': {
          'en': '/foo/:slug-:id(\\d+)',
          'de': '/bar/:slug-:id(\\d+)',
        }
      },
      ...
    }]</pre>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>

.container {
  min-height: 100vh;
  margin: 1rem;
}

pre {
  background: #EEE;
  padding: 4px;
}

div {
  padding: 1rem;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
