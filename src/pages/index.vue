<script setup>
import ThermalPrinter from '@kedeka/thermal-printer'
import { e } from 'unocss';

const name = $ref('')

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const scan = () => {
  ThermalPrinter.listPrinters({ type: 'bluetooth' }, devices => {
    console.log(devices)
  })
}

const test = () => {
  // ThermalPrinter.coba({
  //   value: 'Coba'
  // })

  const devices = [
    '66:12:E6:70:37:9A',
    // '11:22:33:44:55:66',
    // '86:67:7A:A7:60:AD',
  ];

  devices.forEach((id) => {

    const params = {
      type: 'bluetooth',
      id
    }
  
    ThermalPrinter.printFormattedText({
      ...params,
      font: 'FONT_A',
      text: ''
        + '[C]01234567890123456789012345678901234567890\n'
        + '[C]ABCDEFGHIJKLMNOPQRSTUVWXYZ\n'
        + '[C]abcdefghijklmnopqrstuvwxyz\n'
      ,
      mmFeedPaper: 12,
      printerWidthMM: 50,
      printerNbrCharactersPerLine: 32,
    }, (success) => {
      ThermalPrinter.disconnectPrinter(params)
      console.log('successfully printed!')
    }, (error) => {
      console.error('printing error', error)
    })
  })


  // ThermalPrinter.sendCommand('TEXT_FONT_A', {
  //   ...params,
  //   text: "0123123123123213",
  // }, (success) => {
  //   console.log("send command success", success)
  // }, (error) => {
  //   console.log('send command failed', error)
  // })

  // ThermalPrinter.sendCommand('TEXT_FONT_B', {
  //   ...params
  // }, (success) => {
  //   console.log('send command', success)
  //   ThermalPrinter.printFormattedText({
  //     ...params,
  //     text: '[C]Bello'
  //   }, (success) => {
  //     console.log('successfully printed!')
  //   }, (error) => {
  //     console.error('printing error', error)
  //   })
  // })



  // ThermalPrinter.sendCommand('test', {
  //   ...params
  // }, (success) => {
  //   console.log(success)
  //   ThermalPrinter.printFormattedText({
  //     ...params,
  //     text: '[C]Bello'
  //   })
  // }, (error) => {
  //   console.log(error)
  // })

  // ThermalPrinter.version((success: any) => {
  //   console.log(success)
  // })
}
</script>

<template>
  <div>
    <div i-carbon-campsite text-4xl inline-block />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Vitesse Lite
      </a>
    </p>
    <p>
      <em text-sm op75>Opinionated Vite Starter Template</em>
    </p>

    <div py-4 />

    <input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
      <button
        class="m-3 text-sm btn"
        @click="scan"
      >
        Scan
      </button>
      <button
        class="m-3 text-sm btn"
        @click="test"
      >
        Test
      </button>
    </div>
  </div>
</template>
