// Plugins
import AutoImport from 'unplugin-auto-import/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import { ViteAliases } from 'vite-aliases'
import Compression from 'vite-compression-plugin'
import DynamicImport from 'vite-plugin-dynamic-import'
import Progress from 'vite-plugin-progress'
import { qrcode as QrCode } from 'vite-plugin-qrcode'
import { vitePluginVersionMark as VersionMark } from 'vite-plugin-version-mark'
import WebfontDownload from 'vite-plugin-webfont-dl'

import { ValidateEnv } from '@julr/vite-plugin-validate-env'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(/* options */),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: [
        // Presets
        // See all presets: https://github.com/antfu/unplugin-auto-import/tree/main/src/presets
        'vue',
        'vue-router',
        'pinia',
        'vue-i18n',
        '@vueuse/core'
      ],
      eslintrc: {
        enabled: true
      }
    }),
    ViteAliases({
      useConfig: true,
      useTypescript: true
    }),
    Progress(),
    Components({
      dirs: ['src/components', 'src/layouts', 'src/views'],
      deep: true,
      dts: 'src/components.d.ts',
      // DirectoryAsNamespace: true,
      resolvers: [
        IconsResolver({
          customCollections: ['my']
        })
      ],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/]
    }),
    WebfontDownload(/* options */),
    Icons({
      /* Options */
      compiler: 'vue3',
      autoInstall: true,
      customCollections: {
        my: FileSystemIconLoader('src/assets/icons', svg =>
          svg.replace(/^<svg /, '<svg fill="currentColor" ')
        )
      }
    }),
    DynamicImport(/* options */),
    Compression(/* options */),
    // TsconfigPaths(),
    QrCode(),
    ValidateEnv({
      /* Options */
    }),
    VersionMark({
      // Name: 'test-app',
      // version: '0.0.1',
      ifGitSHA: true,
      ifShortSHA: true,
      ifMeta: true,
      ifLog: true,
      ifGlobal: true
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";'
      }
    }
  }
})
