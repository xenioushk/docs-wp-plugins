$(function () {
  // Update the log text
  function updatesLogTag(string) {
    let Obj = {
      "Added:": "<b>🚀 Added:</b>",
      "Updated:": "<b>🔥 Updated:</b>",
      "Fixed:": "<b>✅ Fixed:</b>",
      "Removed:": "<b>❌ Removed:</b>",
    }

    return string.replace(/Added:|Updated:|Fixed:|Removed:/gi, function (matched) {
      return Obj[matched]
    })
  }

  // Generate Dynamic Log File.
  function generateDynamicLog(data) {
    const $dynamic_log = $("#dynamic_log")
    const commonLogText = "<b>🔥 Updated:</b> Plugin translation file & documentation."
    if ($dynamic_log.length) {
      data.forEach((element) => {
        var outputHtml = "<div>"

        outputHtml += `<p class="log_date">` + element[0] + `</p>`

        if (element[1].length > 0) {
          // console.log(element[1])

          outputHtml += `<ul class="square-list">`

          element[1].forEach((log) => {
            outputHtml += `<li>` + updatesLogTag(log) + `</li>`
          })

          outputHtml += `<li>` + commonLogText + `</li>`
          outputHtml += `</ul>`
        }

        outputHtml += "</div>"

        $dynamic_log.before(outputHtml)
      })
    } else {
      alert("#dynamic_log is missing. Example: srcare doc")
    }
  }

  // Update Version and Last Update Info

  function updateMetaInfo(metaData) {
    const $lastUpdate = $(".update"),
      $ver = $(".ver")

    if ($lastUpdate.length) {
      $ver.html("").html(metaData[0])
      $lastUpdate.html("").html(metaData[1])
    } else {
      alert(".update is missing. Example: srcare doc")
    }
  }

  // Change only the version and date
  var metaData = ["2.2.3", "04/06/2025"]
  updateMetaInfo(metaData)

  // Just add a new row.
  var changeLogData = [
    // Add a new row below this comment.
    ["2025, June, 04 - v 2.2.3", ["Updated: FAQ Pagination.", "Updated: SCSS file.", "Fixed: Search button hide issue.", "Updated: Dashboard widget class.", "Fixed: RTL issue.", "Fixed: ActionScheduler bug."]],
    ["2025, May, 13 - v 2.2.2", ["Added: Sortable column."]],
    ["2025, May, 10 - v 2.2.1", ["Fixed: Dashboard widget notice bug."]],
    ["2025, May, 09 - v 2.2.0", ["Updated: Plugin custom category sort options.", "Updated: Tab shortcode."]],
    ["2025, May, 03 - v 2.1.9", ["Updated: Plugin options panel data saving issue.", "Fixed: Search only title bug."]],
    ["2025, April, 26 - v 2.1.8", ["Updated: Plugin pagination shortcode.", "Fixed: Gutenberg FAQ page saving issue."]],
    ["2025, April, 24 - v 2.1.7", ["Updated: Plugin options panel.", "Updated: Plugin for WordPress 6.8", "Updated: plugin analytic page.", "Updated: Plugin notices and meta info."]],
    ["2025, April, 20 - v 2.1.6", ["Fixed: Database namespace issue."]],
    ["2025, March, 20 - v 2.1.5", ["Added: bwl-plugin-api composer package.", "Updated: Plugin namespace and constants.", "Updated: Plugin notice apis.", "Fixed: chart.js script loading issue."]],
    ["2025, March, 12 - v 2.1.4", ["Fixed: The purchase code remove issue.", "Fixed: The notice API security bug.", "Updated: Plugin filter and actions API.", "Updated: Plugin meta information.👌"]],
    ["2025, February, 16 - v 2.1.3", ["Updated: Plugin license verification code.", "Updated: Plugin for WooCommerce 9.6.2"]],
    ["2025, January, 26 - v 2.1.2", ["Updated: Plugin code minor issues.", "Updated: Plugin for WooCommerce 9.6.0"]],
    ["2024, December, 09 - v 2.1.1", ["Updated: Plugin for WordPress 6.7.1", "Updated: Plugin for WooCommerce 9.4.3"]],
    ["2024, October, 19 - v 2.1.0", ["Fixed: Plugin text translation issue."]],
    ["2024, August, 24 - v 2.0.9", ["Fixed: Tab javascript conflicts.", "Updated: Plugin for WordPress 6.6.2"]],
    ["2024, August, 13 - v 2.0.8", ["Fixed: FAQs dynamic sort bug issues.", "Fixed: FAQ author name display issue.", "Updated: Plugin for WordPress 6.6.1"]],
    ["2024, July, 23 - v 2.0.7", ["Updated: Plugin accessibility code.", "Updated: Plugin Faq submission form.", "Updated: Plugin for WordPress 6.6"]],
    ["2024, July, 17 - v 2.0.6", ["Updated: Plugin code.", "Updated: Plugin for WordPress 6.5.5"]],
    ["2024, June, 14 - v 2.0.5", ["Added: Option to setup FAQ title tag.", "Fixed: Plugin faq title font size issue.", "Fixed: Plugin update notice warning message.", "Updated: Plugin for WordPress 6.5.4"]],
    ["2024, January, 10 - v 2.0.4", ["Fixed: FAQ Admin panel analytics page query issue.", "Fixed: Plugin analytics page."]],
    ["2024, January, 09 - v 2.0.3", ["Fixed: FAQ like vote count issue."]],
    ["2024, January, 03 - v 2.0.2", ["Added: FAQ like button animation.", "Updated: Plugin FAQ analytics page.", "Updated: Plugin for WordPress 6.4.2", "Fixed: Plugin license activation issue."]],
    ["2023, October, 25 - v 2.0.1", ["Fixed: Plugin license activation issue."]],
    ["2023, October, 17 - v 2.0.0", ["Fixed: Shortcode editor loading issue.", "Updated: Plugin License page."]],
    ["2023, October, 05 - v 1.9.9", ["Fixed: Plugin code minor issues.", "Updated: Plugin for WordPress 6.3.1"]],
    ["2023, September, 26 - v 1.9.8", ["Fixed: Plugin code minor issues.", "Updated: Plugin for WordPress 6.3.1"]],
    ["2023, September, 11 - v 1.9.7", ["Fixed: Plugin code issues.", "Updated: Plugin for WordPress 6.3.1"]],
  ]
  generateDynamicLog(changeLogData)
})
